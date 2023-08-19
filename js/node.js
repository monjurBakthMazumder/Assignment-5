const couponBtn = document.getElementById('couponBtn');
        const purchaseBtn = document.getElementById('purchaseBtn');
        const goHomeBtn = document.getElementById('goHomeBtn');
        couponBtn.disabled = true;
        purchaseBtn.disabled = true;     
        goHomeBtn.addEventListener('click', function(){
            const totalPriceClearFiled = document.getElementById('totalPrice');
            const discountClearFiled = document.getElementById('discount');
            const totalClearFiled = document.getElementById('total');
            const clearName = document.getElementById('addName');
            totalPriceClearFiled.innerText = '00';
            discountClearFiled.innerText = '00';
            totalClearFiled.innerText = '00';
            clearName.innerText = '';
            couponBtn.disabled = true;
            purchaseBtn.disabled = true;

        })
        couponBtn.addEventListener('click', function(){
            const totalPrice2 = Number(document.getElementById('totalPrice').innerText);
            const discountFiled = document.getElementById('discount');
            const discount = Number(discountFiled.innerText);
            const totalFiled = document.getElementById('total');
            const total = Number(totalFiled.innerText);
            const couponCodeFiled = document.getElementById('couponCode');
            const couponCode = couponCodeFiled.value;
            couponCodeFiled.value = '';
            if(couponCode === 'SELL200'){
                const totalNewToFixed = totalPrice2 * 0.8;
                const totalNew = totalNewToFixed.toFixed(2);
                totalFiled.innerText = totalNew;
                const discountNewToFixed = totalPrice2 * 0.2;
                const discountNew = discountNewToFixed.toFixed(2);
                discountFiled.innerText = discountNew;
            }

        })
        let i =0;
        function getElementInnerText(nameId, priceId){
            const addName = document.getElementById('addName');
            const elementText = document.getElementById(nameId).innerText;
            const h1 = document.createElement('h1');
            i++;
            h1.innerText = `${i}. ${elementText}`;
            addName.appendChild(h1);
            const totalPriceFiled = document.getElementById('totalPrice');
            const totalPrice = Number(document.getElementById('totalPrice').innerText);
            const element = Number(document.getElementById(priceId).innerText);
            const totalPriceNow = totalPrice + element;
            totalPriceFiled.innerText = totalPriceNow.toFixed(2);
            if(totalPriceNow > 0){
            purchaseBtn.disabled = false;
        }
            if(totalPriceNow >= 200){
            couponBtn.disabled = false;
        }
        };
        document.getElementById('card1').addEventListener('click', function(){
            getElementInnerText('card1Name', 'card1Price')
        });
        document.getElementById('card2').addEventListener('click', function(){
            getElementInnerText('card2Name', 'card2Price')
        });
        document.getElementById('card3').addEventListener('click', function(){
            getElementInnerText('card3Name', 'card3Price')
        });
        document.getElementById('card4').addEventListener('click', function(){
            getElementInnerText('card4Name', 'card4Price')
        });
        document.getElementById('card5').addEventListener('click', function(){
            getElementInnerText('card5Name', 'card5Price')
        });
        document.getElementById('card6').addEventListener('click', function(){
            getElementInnerText('card6Name', 'card6Price')
        });
