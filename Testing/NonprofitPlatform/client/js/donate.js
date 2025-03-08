// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Handle custom amount input
    const amountOptions = document.querySelectorAll('input[name="amount"]');
    const customAmountContainer = document.querySelector('.custom-amount');
    const customAmountInput = customAmountContainer.querySelector('input');

    amountOptions.forEach(option => {
        option.addEventListener('change', () => {
            if (option.value === 'custom') {
                customAmountContainer.style.display = 'block';
                customAmountInput.focus();
            } else {
                customAmountContainer.style.display = 'none';
            }
        });
    });

    // Simple form validation
    customAmountInput.addEventListener('input', () => {
        const value = parseFloat(customAmountInput.value);
        if (value < 1) {
            customAmountInput.value = 1;
        }
    });
});
