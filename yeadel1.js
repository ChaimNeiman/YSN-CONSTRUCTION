// Get the modal and buttons
var modal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contactBtn");
var contactBtn2 = document.getElementById("contactBtn2");
var contactBtn3 = document.getElementById("contactBtn3");
var contactBtn4 = document.getElementById("contactBtn4");
var closeModal = document.getElementById("closeModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModalFunc() {
    modal.style.display = "none";
}

// Event listeners for opening and closing the modal
contactBtn.addEventListener("click", openModal);
contactBtn2.addEventListener("click", openModal);
contactBtn3.addEventListener("click", openModal);
contactBtn4.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalFunc();
    }
}
document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block';
});

document.getElementById('contactBtn2').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});


