export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);
  // const { age } = await readBody(event);
  const { currencyKey } = useRuntimeConfig();
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=EUR%2CUSD%2CCAD`
  );
  return data;
});
