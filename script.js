$(document).ready(function () {

    function payment(amt) {
        let handler = PaystackPop.setup({
            key: 'pk_test_9fd94ac20d06fc005746676ca882869f8f9696df', // Replace with your public key
            email: 'dreyola80@gmail.com', // Replace with your email
            amount: amt * 100,
            ref: '' +Math.floor((Math.random() * 1000000) + 1), 
            onClose: function(){
              alert('Please make the payment');
            },
            callback: function(response){
              let message = 'Payment complete! Reference: ' + response.reference;
              alert(message);
            }
            

          });

          handler.openIframe();

        
          
        }

    let data = [
        {image: './Images/phantom-x2-pro.png',      discount: '50%', amt: 471000, title: 'Phantom'},
        {image: './Images/infinix.jpg',             discount: '30%', amt: 250000, title: 'Zero'},
        {image: './Images/tecno-spark10-pro-5.jpg', discount: '20%', amt: 130000, title: 'Spark'},
    ]

    data.map((item) =>{
        let firstdiv = document.createElement('div')
        firstdiv.setAttribute('class', 'col-md-4 col-12')

        let seconddiv = document.createElement('div')
        seconddiv.setAttribute('class', 'card')

        firstdiv.appendChild(seconddiv)
        
        let image = document.createElement('img')
        image.setAttribute('class', 'card-img-top')
        image.setAttribute('src', item.image)

        seconddiv.appendChild(image)

        let span = document.createElement('span')
        span.setAttribute('class', 'badge rounded-pill text-bg-primary')
        span.innerText = item.discount
        seconddiv.appendChild(span)

        let thirddiv = document.createElement('div')
        thirddiv.setAttribute('class', 'card-body')

        seconddiv.appendChild(thirddiv)
        
        let h4 = document.createElement('h4')
        h4.setAttribute('class', 'card-title')
        h4.innerText = item.title
        thirddiv.appendChild(h4)

        let p = document.createElement('p')
        p.setAttribute('class', 'card-text')
        p.innerText = item.amt
        thirddiv.appendChild(p)

        let fourthdiv = document.createElement('div')
        fourthdiv.setAttribute('class', 'card-footer')

        thirddiv.appendChild(fourthdiv)

        let button = document.createElement('button')
        button.setAttribute('class', 'w-100 btn btn-success')
        button.onclick = function() {
            payment(item.amt)
         }

        fourthdiv.appendChild(button)

        let i = document.createElement('i')
        i.setAttribute('class', 'fa fa-shopping-cart')
        button.appendChild(i)

        document.querySelector('.row').append(firstdiv)
    })
})

//     <div class="col-md-4 col-12">
// //     <div class="card">
// //         <img class="card-img-top" src="./infinix-zero-ultra-1.jpg" alt="Title">
// //         <span class="badge rounded-pill text-bg-primary">New!</span>
// //         <div class="card-body">
// //             <h4 class="card-title">Infinix Zero Ultra</h4>
// //             <p class="card-text">N450,000</p>
// //         </div>
// //         <div class="card-footer">
// //             <button class="w-100 btn btn-success"> <i class="fa-solid fa-shopping-cart"></i></button>
// //         </div>
// //     </div>
    // let firstdiv = document.createElement('div')
    // firstdiv.setAttribute('class', 'test1')

    // let image = document.createElement('img')
    // image.setAttribute('src', '/image1.png')

    // let p = document.createElement ('p')
    // p.innerText = 'hello'

    // firstdiv.append(image)
    // firstdiv.append(p)

    // console.log(firstdiv)

//     

// </div>

// let firstdiv = document.createElement('div')
// firstdiv.setAttribute('class', 'col-md-4 col-12')

// let seconddiv = document.createElement('div')
// seconddiv.setAttribute('class', 'card')
// let image = document.createElement('img')
// image.setAttribute('class', 'card-img-top')
// image.setAttribute('src', './infinix.jpg')
// let span = document.createElement('span')
// span.setAttribute('class', 'badge rounded-pill text-bg-primary')
// span.innerText = 'New!'

// let thirddiv = document.createElement('div')
// thirddiv.setAttribute('class', 'card-body')
// let h4 = document.createElement('h4')
// h4.setAttribute('class', 'card-title')
// h4.innerText = 'Infinix Zero Ultra'
// let p = document.createElement('p')
// p.setAttribute('class', 'card-text')
// p.innerText = 'N450,000'

// let fourthdiv = document.createElement('div')
// fourthdiv.setAttribute('class', 'card-footer')
// let button = document.createElement('button')
// button.setAttribute('class', 'w-100 btn btn-success')
// let i = document.createElement("i")
// i.setAttribute('class', 'fa-solid fa-shopping-cart')

// seconddiv.append(image)
// seconddiv.append(span)
// thirddiv.append(h4)
// thirddiv.append(p)
// fourthdiv.append(button)
// button.append(i)

// firstdiv.append(seconddiv)

// seconddiv.append(thirddiv)

// seconddiv.append(fourthdiv)

// document.querySelector(".row").append(firstdiv)
