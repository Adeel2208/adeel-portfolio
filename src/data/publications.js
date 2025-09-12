export const publications = [
  {
    title: "Detection of Parkinson’s Disease From Voice Signals Using Explainable AI",
    conference: "IEEE ETECTE’24",
    accuracy: "97.8%",
    model: "Attention ResNet18",
    techniques: ["LIME", "SHAP", "GradCAM"],
    link: "https://ieeexplore.ieee.org/document/10823755",
    image: "/paper-parkinsons.jpg"
  },
  {
    title: "Hybrid LSTM-Attention Framework for Cardiac Abnormalities Classification",
    conference: "IEEE ETECTE’25",
    model: "LSTM + Attention",
    techniques: ["Attention Visualization", "Integrated Gradients"],
    link: "https://ieeexplore.ieee.org/abstract/document/11070260",
    image: "/paper-cardiac.jpg"
  },
  {
    title: "Hybrid Deep Learning for Blood Cancer Detection: CNN-GCN Approach",
    conference: "IEEE ETECTE’25",
    model: "CNN + GCN",
    techniques: ["Graph Neural Networks", "Saliency Maps"],
    link: "https://ieeexplore.ieee.org/document/11070297",
    image: "/paper-cancer.jpg"
  }
];