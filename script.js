window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const headerInner = document.getElementById('header-inner');
  if (window.scrollY > 50) {
    header.classList.add('bg-black', 'bg-opacity-40', 'backdrop-blur-md', 'text-shadow', 'shadow-[0px_20px_40px]', 'shadow-[#2424245c]');
    headerInner.classList.remove('border-b-2', 'border-[white]');
  } else {
    header.classList.remove('bg-black', 'bg-opacity-40', 'backdrop-blur-md', 'text-shadow', 'shadow-[0px_20px_40px]', 'shadow-[#2424245c]');
    headerInner.classList.add('border-b-2', 'border-[white]');

  }
});

const menuOpen = document.querySelector('#menu-open');


const toggleMenu = () => {
  if (menuOpen.classList.contains('hidden')) {
    menuOpen.classList.remove('hidden')
  } else {
    menuOpen.classList.add('hidden')
  }
}



