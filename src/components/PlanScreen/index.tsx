import './PlanScreen.css';
import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import { useAppSelector } from '../../hooks';
import { selectUser } from '../../features/user/userSlice';
import { loadStripe } from '@stripe/stripe-js';

type Props = {};

type Subscription = {
  role: string;
  current_period_end: number;
  current_period_start: number;
};

const InitialSubscription: Subscription = {
  role: 'none',
  current_period_end: 0,
  current_period_start: 0,
};

const PlanScreen = (props: Props) => {
  const [products, setProducts] = useState({});
  const user = useAppSelector(selectUser);
  const [subscription, setSubscription] =
    useState<Subscription>(InitialSubscription);

  useEffect(() => {
    db.collection('customers')
      .doc(user?.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user?.uid]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products: any = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);
  console.log(subscription);

  const loadCheckout = async (priceId: string) => {
    const docRef = await db
      .collection('customers')
      .doc(user?.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId }: any = snap.data();

      if (error) {
        alert(`An error occurd: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51JQZGXERlcbwiJXhbzv5n4BlIdnTDlPzXMrMgywg4dJCQL9w56a6G9WUFr7U9o55D7NkbWiBb9GiWuQlm4UC6Hz500yMCBtdKe',
        );
        stripe?.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className='plansScreen'>
      <br />

      {subscription.current_period_end && (
        <p>
          Renewal date:{' '}
          {new Date(
            subscription.current_period_end * 1000,
          ).toLocaleDateString()}
        </p>
      )}

      {Object.entries(products).map(
        ([productId, productData]: [string, any]) => {
          const isCurrentPackage = productData.name
            ?.toLowerCase()
            .includes(subscription.role);

          return (
            <div
              key={productId}
              className={`${
                isCurrentPackage && `plansScreen__plan--disabled`
              } plansScreen__plan`}
            >
              <div className='plansScreen__info'>
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>

              <button
                onClick={() =>
                  !isCurrentPackage && loadCheckout(productData.prices.priceId)
                }
              >
                {isCurrentPackage ? 'Current Package' : 'Subscribe'}
              </button>
            </div>
          );
        },
      )}
    </div>
  );
};

export default PlanScreen;
