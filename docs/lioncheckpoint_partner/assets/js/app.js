// function test(key){
//   // alert('test');
//   console.log('test',key);

//   'use strict';
  
//   Omise.setPublicKey('YOUR_PUBLIC_KEY');
  
//   var checkoutForm = document.getElementById('checkout-form')
//   console.log('debug',checkoutForm);

//   var cardInformation = {
//     name:             document.querySelector('[data-name="nameOnCard"]').value,
//     number:           document.querySelector('[data-name="cardNumber"]').value,
//     expiration_month: document.querySelector('[data-name="expiryMonth"]').value,
//     expiration_year:  document.querySelector('[data-name="expiryYear"]').value,
//     security_code:    document.querySelector('[data-name="securityCode"]').value
//   };

//   Omise.createToken('card', cardInformation, function(statusCode, response) {
//     if (statusCode === 200) {
//       // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
//       // found in `response.id`.
//       checkoutForm.omiseToken.value = response.id;

//       checkoutForm.submit();
//       console.log('ssssssssss');
//     }
//     else {
//       console.log('eeeeeeeeee',response);
//       // Error: display an error message. Note that `response.message` contains
//       // a preformatted error message. Also note that `response.code` will be
//       // "invalid_card" in case of validation error on the card.
//     }
//   });
// }

//amount is 10.00 = 1000 unit
function paymentOmiseCard(amountFull,paymentMethod){
  OmiseCard.configure({
    publicKey: "OMISE_PUBLIC_KEY"
  });
 
  var form = document.querySelector("#checkoutForm");

  OmiseCard.open({
    amount: amountFull,
    currency: "THB",
    // defaultPaymentMethod: "credit_card",
    defaultPaymentMethod: paymentMethod,
    onCreateTokenSuccess: (nonce) => {
        console.log("onSuccess");
        if (nonce.startsWith("tokn_")) {
            form.omiseToken.value = nonce;
        } else {
            form.omiseSource.value = nonce;
        };
      form.submit();
    },
    onFormClosed: () => {
      /* Handler on form closure. */
      console.log(amountFull);
    },
  });

} //end omise

function cardChart(id,color) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");

  // myBar = new component(ctx,10, 70, "green", 10, 30/2);
  RectBack = new component(ctx,100, 100, "white", 0, 0);

  myBar = new component(ctx,10, 70, color, 10, 30/2);
  myText1 = new textComponent(ctx,"TON",14,"black",30,30);
  myText2 = new textComponent(ctx,"###.#",14,"blue",30,50);
  myText3 = new textComponent(ctx,"Target",8,"black",30,70);
  myText4 = new textComponent(ctx,"###.#",8,"blue",65-10,70);
  myText5 = new textComponent(ctx,"TON",8,"black",95-15,70);
  myText6 = new textComponent(ctx,"###",10,"blue",10,95);
  myText7 = new textComponent(ctx,"%",10,"black",30,95);

}

function component(ctx,width, height, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function textComponent(ctx,text,fontSizePx,color, x, y){    
  ctx.fillStyle = color;
  ctx.font = fontSizePx+"px Arial";
  ctx.fillText(text, x, y);
}

//------------------------- TON Daily_Production_Weight -------------------------------------
function card_Daily_Production_Weight(
    id
    ,Weight
    ,Target
    ,Present
){
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    // myBar = new component(ctx,10, 70, "green", 10, 30/2);
    RectBackground = new component(ctx,100, 100, "white", 0, 0);
    let color = 'green';
    myBar = new component(ctx,10, 70, color, 10, 30/2);
    myText1 = new textComponent(ctx,"TON",16,"black",30,30);
    myText2 = new textComponent(ctx,Weight,20,"blue",30+15,55);

    myText3 = new textComponent(ctx,"Target",10,"black",22,75);
    myText4 = new textComponent(ctx,Target,12,"blue",65-7,75);
    myText5 = new textComponent(ctx,"TON",8,"black",95-15,75);

    myText6 = new textComponent(ctx,Present,10,"blue",10,95);
    myText7 = new textComponent(ctx,"%",10,"black",30,95);
}

//------------------------- TON/HR Daily_Production_Weight_TonHR -------------------------------------
function card_Daily_Production_Weight_TonHR(
    id
    ,Weight
    ,Target
    ,Present
){
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    // myBar = new component(ctx,10, 70, "green", 10, 30/2);
    RectBackground = new component(ctx,100, 100, "white", 0, 0);
    let color = 'green';

    myBar = new component(ctx,10, 70, color, 10, 30/2);
    myText1 = new textComponent(ctx,"TON/HR",16,"black",30,30);
    myText2 = new textComponent(ctx,Weight,20,"blue",30,50);

    myText3 = new textComponent(ctx,"Target",10,"black",22,75);
    myText4 = new textComponent(ctx,Target,12,"blue",65-7,75);
    myText5 = new textComponent(ctx,"TON",8,"black",95-15,75);

    myText6 = new textComponent(ctx,Present,10,"blue",10,95);
    myText7 = new textComponent(ctx,"%",10,"black",30,95);
}

//------------------------- CCL LINE: Daily Weight -------------------------------------
//1000 x 300
function card_CCL_Line_Daily_Weight(
  id  
){
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    RectBackground = new component(ctx,1000, 220, "white", 0, 0);
    let color = 'green';

    //text for x
    ctx.fillStyle = 'black';
    ctx.font = "10px Arial";
    ctx.fillText('Daily', 10, 20);
    ctx.fillText('Weight', 10, 30+5);
    ctx.fillText('(TON)', 10, 40+10);
    //Line x
    let x = 150;
    ctx.moveTo(50, 20);
    ctx.lineTo(50, x);
    ctx.stroke();
    //Line y  
    ctx.moveTo(50, x);
    ctx.lineTo(920, x);
    ctx.stroke();
    //text for y
    ctx.fillText('TIME', 920-10, x+15);
    //text Target
    ctx.fillText('TARGET', 50, x+15+40);
    
    ctx.fillText('##.##', 50+50, x+15+40);
    ctx.fillText('TON', 50+80, x+15+40);
    
    //text for y (24hr)
    let pointTimeX = 50+5;
    let pointTimeY = x+15;
    ctx.fillText('18.00-', pointTimeX, pointTimeY);
    ctx.fillText('19.00', pointTimeX, pointTimeY+10);//1

    let spaceOnLineY = 35;
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('19.00-', pointTimeX, pointTimeY);
    ctx.fillText('20.00', pointTimeX, pointTimeY+10);//2

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('20.00-', pointTimeX, pointTimeY);
    ctx.fillText('21.00', pointTimeX, pointTimeY+10);//3

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('21.00-', pointTimeX, pointTimeY);
    ctx.fillText('22.00', pointTimeX, pointTimeY+10);//4

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('22.00-', pointTimeX, pointTimeY);
    ctx.fillText('23.00', pointTimeX, pointTimeY+10);//5

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('23.00-', pointTimeX, pointTimeY);
    ctx.fillText('00.00', pointTimeX, pointTimeY+10);//6

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('00.00-', pointTimeX, pointTimeY);
    ctx.fillText('01.00', pointTimeX, pointTimeY+10);//7

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('01.00-', pointTimeX, pointTimeY);
    ctx.fillText('02.00', pointTimeX, pointTimeY+10);//8

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('02.00-', pointTimeX, pointTimeY);
    ctx.fillText('03.00', pointTimeX, pointTimeY+10);//9

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('03.00-', pointTimeX, pointTimeY);
    ctx.fillText('04.00', pointTimeX, pointTimeY+10);//10

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('04.00-', pointTimeX, pointTimeY);
    ctx.fillText('05.00', pointTimeX, pointTimeY+10);//11

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('05.00-', pointTimeX, pointTimeY);
    ctx.fillText('06.00', pointTimeX, pointTimeY+10);//12

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('06.00-', pointTimeX, pointTimeY);
    ctx.fillText('07.00', pointTimeX, pointTimeY+10);//13

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('07.00-', pointTimeX, pointTimeY);
    ctx.fillText('08.00', pointTimeX, pointTimeY+10);//14

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('08.00-', pointTimeX, pointTimeY);
    ctx.fillText('09.00', pointTimeX, pointTimeY+10);//15

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('09.00-', pointTimeX, pointTimeY);
    ctx.fillText('10.00', pointTimeX, pointTimeY+10);//16

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('10.00-', pointTimeX, pointTimeY);
    ctx.fillText('11.00', pointTimeX, pointTimeY+10);//17

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('11.00-', pointTimeX, pointTimeY);
    ctx.fillText('12.00', pointTimeX, pointTimeY+10);//18

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('12.00-', pointTimeX, pointTimeY);
    ctx.fillText('13.00', pointTimeX, pointTimeY+10);//19

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('13.00-', pointTimeX, pointTimeY);
    ctx.fillText('14.00', pointTimeX, pointTimeY+10);//20

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('14.00-', pointTimeX, pointTimeY);
    ctx.fillText('15.00', pointTimeX, pointTimeY+10);//21

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('15.00-', pointTimeX, pointTimeY);
    ctx.fillText('16.00', pointTimeX, pointTimeY+10);//22

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('16.00-', pointTimeX, pointTimeY);
    ctx.fillText('17.00', pointTimeX, pointTimeY+10);//23

    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('17.00-', pointTimeX, pointTimeY);
    ctx.fillText('18.00', pointTimeX, pointTimeY+10);//24
  
    //Bar 24 hr
    pointTimeX = 50+15;
    pointTimeY = x+15-100-15;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
  
    spaceOnLineY = 35;
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);    
    
    pointTimeX = pointTimeX + spaceOnLineY;
    myBar = new component(ctx,15, 100, 'green', pointTimeX, pointTimeY);


    //text on Bar
    pointTimeX = 50+15-5;
    pointTimeY = x+15-100-15-10;
    ctx.fillStyle = 'black';
    ctx.fillText('##.##', pointTimeX, pointTimeY);

    spaceOnLineY = 35;
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);
    pointTimeX = pointTimeX + spaceOnLineY;
    ctx.fillText('##.##', pointTimeX, pointTimeY);

}