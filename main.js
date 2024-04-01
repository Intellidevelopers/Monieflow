function  done(){
    swal("Type something:", {
        content: "input",
      })
      .then((value) => {
        swal(`You typed: ${value}`);
      });
}

function  showAlert(){
    Swal.fire({
        title: 'Payment Successful',
        text: 'Your payment has been confirmed',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "dashboard.html"
        }
    })
}