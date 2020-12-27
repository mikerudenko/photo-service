import React, { memo, useState } from 'react';
import { useAutoCallback } from 'hooks.macro';
import { AppContainer } from '../components/app-container';
import { getCallableFunction } from '../services/firebase-service';

export const Payment = memo(() => {
  const [form, setForm] = useState('');

  const onMakePaymentClick = useAutoCallback(async () => {
    const trigger = getCallableFunction('triggerTestPay');
    const { data } = await trigger();
    setForm(data);
  });

  return (
    <AppContainer>
      <button onClick={onMakePaymentClick}> Make payment</button>
      <div
        dangerouslySetInnerHTML={{ __html: form }}
        style={{ margin: '40px auto' }}
      ></div>
    </AppContainer>
  );
});
