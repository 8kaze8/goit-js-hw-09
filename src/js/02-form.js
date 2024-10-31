// Local Storage anahtarı
const STORAGE_KEY = 'feedback-form-state';

// Form ve alanları seç
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// localStorage'dan verileri yükle ve formu doldur
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
};

// Form verilerini localStorage'a kaydet
const saveFormData = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Sayfa yüklendiğinde form verilerini yükle
window.addEventListener('DOMContentLoaded', loadFormData);

// Her input olayında veriyi kaydet
form.addEventListener('input', saveFormData);

// Form gönderildiğinde veriyi temizle ve konsola yazdır
form.addEventListener('submit', event => {
  event.preventDefault();

  // Form alanlarının doldurulup doldurulmadığını kontrol et
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill out both fields before submitting.');
    return;
  }

  // Veriyi konsola yazdır
  console.log({
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  });

  // LocalStorage ve form alanlarını temizle
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
