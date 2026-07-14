const { Resend } = require('resend');

const resend = new Resend('re_MzhZTnR6_DRWz6ALe8PftuDYSh4tKf2qi');

async function testSend() {
  const { data, error } = await resend.emails.send({
    from: 'EmotionWire Contact Form <notifications@emotionwire.co>',
    to: ['prajwal.dhakate@emotionwire.co'],
    subject: 'Test Email',
    html: '<p>This is a test.</p>',
  });

  console.log('Data:', data);
  console.log('Error:', error);
}

testSend();
