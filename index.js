const TelegramBot = require('node-telegram-bot-api');

const CONFIG = require('./src/config/config')

const bot = new TelegramBot(CONFIG.TOKEN, {polling: true});

// bot.onText(/\/start/, (msg, match) => {

//   bot.sendMessage(msg.chat.id, `<i>Assalamu alaykum ${msg.chat.first_name}</i>`, {
//       parse_mode: 'html',
//       reply_markup: {
//           keyboard: [
//               [{
//                       text: 'say alhamdulillah'
//               }, {
//                       text: 'say mashaallah'
//               }],
//               [{text: 'Send phone number', request_contact: true}, {text: 'Send location', request_location: true}]
              
//           ],
//           resize_keyboard: true
//       }
//   });
// });

bot.on('callback_query', (cb) => {
    console.log(cb.data)
    if(cb.data == 'say bismillah'){
        // bot.sendMessage(cb.message.chat.id,'Say this when you start something')
        bot.answerCallbackQuery(cb.id, {text: 'salom', show_alert: true})
    }
    if(cb.data == 'say mashaalloh'){
        bot.sendMessage(cb.message.chat.id,'Say this when you see something amazing!')

    }
})



bot.onText(/\/menu/, (msg, match) => {

  bot.sendMessage(msg.chat.id, `Menulardan birini tanlang:`, {
      reply_markup: {
          inline_keyboard: 
          [
              [
                  {
                      text: 'bismillah', 
                      callback_data: 'say bismillah'
                  },
                  {
                      text: 'mashaalloh', 
                      callback_data: 'say mashaalloh'
                  }
              ]
          ],
          resize_keyboard: true
      }
  });
});


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, 'Received your message');
// });