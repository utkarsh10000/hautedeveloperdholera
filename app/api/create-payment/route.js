import crypto from 'crypto';

export async function POST(req) {
  const body = await req.json();

  const PAYU_KEY = 'gtKFFx'; // PayU TEST key
  const PAYU_SALT = 'eCwWELxi'; // PayU TEST salt

  const txnid = 'TXN' + Date.now();
  const amount = '11500.00';
  const productinfo = 'Dholera Plot Registration';
  const firstname = body.name;
  const email = body.email || 'noemail@dholera.com';

  const hashString = `${PAYU_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_SALT}`;
  const hash = crypto.createHash('sha512').update(hashString).digest('hex');

  return Response.json({
    key: PAYU_KEY,
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    phone: body.phone,
    hash,
    surl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
    furl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failure`,
  });
}