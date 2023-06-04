const login_btn=document.querySelector("#login-btn");
const login_box=document.querySelector("#login-box");
const main_page=document.querySelector("#main-page");
main_page.style.display='none'

login_btn.addEventListener("click",function(){
    const acc_no=document.querySelector("#acc_no").value;
    const pass=document.querySelector("#pass").value;
    
    if(acc_no==""){
        alert("Enter your account number:");
    }else if(pass==""){
        alert("Enter your password number:");
    }else{
        login_box.style.display='none'
        main_page.style.display='block'
    }
});

// add deposit start here
const Add_depositBTN=document.querySelector("#Add_depositBTN");

Add_depositBTN.addEventListener("click",function(){
 const deposit_input= document.querySelector("#deposit_input").value;
 const depositNew_input=parseFloat(deposit_input);

 const total_deposit= document.querySelector("#total-deposit").innerHTML;
 const totalNew_deposit=parseFloat(total_deposit);

 const totalldeposit=depositNew_input+totalNew_deposit;
  document.querySelector("#total-deposit").innerHTML=totalldeposit.toFixed(2)

//   change deposit
const totallBlance=document.querySelector("#total-balance").innerHTML;
const totallNewBlance=parseFloat(totallBlance);

const totallDepositeBlance=depositNew_input + totallNewBlance;
document.querySelector("#total-balance").innerHTML=totallDepositeBlance.toFixed(2)


});
// add deposit end here

// withdraw deposit start
const withdraw=document.querySelector("#withdraw");

withdraw.addEventListener("click",function(){
const withdraw_input=document.querySelector("#withdraw_input").value;
const withdraw_new_input=parseFloat(withdraw_input);

const withdraw_total=document.querySelector("#withdraw_total").innerHTML;
const withdraw_new_total=parseFloat(withdraw_total);

const totallwithdraw=withdraw_new_input+withdraw_new_total;
document.querySelector("#withdraw_total").innerHTML=totallwithdraw;

// multipol section
const totallBlance=document.querySelector("#total-balance").innerHTML;
const totallNewBlance=parseFloat(totallBlance);

const withdraw= totallNewBlance - withdraw_new_input;
document.querySelector("#total-balance").innerHTML=withdraw.toFixed(2)

});
// withdraw deposit end


