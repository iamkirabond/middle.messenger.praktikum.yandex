import Error500 from './500';

export default function Error500Wrapper() {
  const data = {
    error: '500',
    description: 'Мы уже фиксим',
  };

  return new Error500(data);
}
