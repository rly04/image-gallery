const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

let imageIndex = 0;

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "stand",
  },
  {
    url: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "basket",
  },
  {
    url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHN8ZW58MHx8MHx8fDA%3D",
    alt: "eep",
  },
];
