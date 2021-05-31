const request=new XMLHttpRequest();
request.open("GET","http://restcountries.eu/rest/v2/all",true);
request.send();

let body=document.querySelector("body");
let container=document.createElement("div");
container.setAttribute("class","container");
body.appendChild(container);

request.onload=()=>{
    let data=JSON.parse(request.response);
    data.forEach((element,i) => {
        let card=document.createElement("div");
        card.setAttribute("class","card");
        card.style="width:18rem";
        container.appendChild(card);

        //!card heading:
        let cardhead=document.createElement("h4");
        cardhead.setAttribute("class","headh4");
        cardhead.innerHTML=element.name;
        card.appendChild(cardhead);

        //!card image:
        let cardImg=document.createElement("img");
        cardImg.setAttribute("src",element.flag);
        cardImg.setAttribute("class","card-img-top");
        cardImg.setAttribute("class","card-img-top");
        card.appendChild(cardImg);

        //!cardBody:
        let cardBody=document.createElement("div");
        cardBody.setAttribute("class","card-body");
        card.appendChild(cardBody);

        //!1st row:
        let firstRow=document.createElement("div");
        cardBody.appendChild(firstRow);

        //!capital-left:
        let capitalLeft=document.createElement("p");
        capitalLeft.setAttribute("class","capitalLeft")
        capitalLeft.innerHTML="Capital:" ;
        firstRow.appendChild(capitalLeft);

        
        //!capitalRight:
        let capitalRight=document.createElement("b");
        capitalRight.setAttribute("class","capitalRight");
        let capital=element.capital;
        capitalRight.innerHTML=capital;
        firstRow.appendChild(capitalRight);
        
        //!2n row:
        let secondRow=document.createElement("div");
        cardBody.appendChild(secondRow);

        //!Region:
        let regionLeft=document.createElement("p");
        regionLeft.setAttribute("class","regionLeft");
        regionLeft.innerHTML="Region: ";
        secondRow.appendChild(regionLeft);
  
          //!regionRight:
          let regionRight=document.createElement("b");
          regionRight.setAttribute("class","regionRight");
          let region=element.region;
          regionRight.innerHTML=region;
          secondRow.appendChild(regionRight);

          //!3rd row:
          let thirdrow=document.createElement("div");
          thirdrow.setAttribute("class","thirdrow");
          cardBody.appendChild(thirdrow);

          //!latlongleft:
          let latlongLeft=document.createElement("p");
          latlongLeft.setAttribute("class","latlongLeft");
          latlongLeft.innerHTML="Lat,Long: ";
          thirdrow.appendChild(latlongLeft);

          //!latlongRight:
          let latlongRight=document.createElement("b");
          latlongRight.setAttribute("class","latlongRight");
          latlongRight.innerHTML=element.latlng[0]+","+element.latlng[1];
          thirdrow.appendChild(latlongRight);

          //!4th row curency:
          let currency=document.createElement("div");
          currency.setAttribute("class","currency");
          cardBody.appendChild(currency);

          //!currencyvalue:
          let currencyvalue=document.createElement("p");
          currencyvalue.setAttribute("class","currencyvalue");
          currencyvalue.innerHTML="Currency";
          currency.appendChild(currencyvalue);

         let table=document.createElement("table");
         table.setAttribute("class","table table-bordered  table-responsive");
         currencyvalue.appendChild(table); 
  
         //!thead:
         let thead=document.createElement("thead");
         table.appendChild(thead);

          //!trow:
         let tr=document.createElement("tr");
         thead.appendChild(tr);
        
         //!th:
         let th1=document.createElement("th");
         th1.innerHTML="Code"
         tr.appendChild(th1);

         let th2=document.createElement("th");
         th2.innerHTML="Name";
         tr.appendChild(th2);
        
         let th3=document.createElement("th");
         th3.innerHTML="Symbol";
         tr.appendChild(th3);
         
         //!table body:
         let tbody=document.createElement("tbody");
         table.appendChild(tbody);

         let currencyData=element.currencies;

         if(currencyData.length>0){
             for(let i=0; i<currencyData.length; i++){
                 let datatr=document.createElement("tr");
                 tbody.appendChild(datatr);
                 //code:
                 let codetd=document.createElement("td");
                 codetd.innerHTML=currencyData[i].code;
                 datatr.appendChild(codetd);
                 //name:
                 let nametd=document.createElement("td");
                 nametd.innerHTML=currencyData[i].name;
                 datatr.appendChild(nametd);
                  //symbol:
                  let symboltd=document.createElement("td");
                  symboltd.innerHTML=currencyData[i].symbol;
                  datatr.appendChild(symboltd);
             }
         }
    });
}