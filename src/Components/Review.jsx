import { useEffect, useState } from "react";
import "../Components/CSS/Review.css";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Paani time par deliver hua aur quality bhi bahut achhi thi. Service kaafi reliable hai."
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Water can bilkul clean tha aur delivery bhi fast mili. Main dobara order karunga."
  },
  {
    id: 3,
    name: "Anjali Singh",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    text: "Supplier easily mil gaya aur order karna bhi simple tha. Overall service achhi lagi."
  },
  {
    id: 4,
    name: "Aman Gupta",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    text: "Daily drinking water ke liye JalMitra kaafi useful hai. Delivery bhi time par milti hai."
  },
  {
    id: 5,
    name: "Neha Mishra",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "Mujhe nearby supplier bahut easily mil gaya. Water quality aur service dono achhe hain."
  },
  {
    id: 6,
    name: "Rohit Singh",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 4,
    text: "Price reasonable hai aur ghar tak water delivery mil jati hai. Good experience."
  }
];

function Reviews() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => {
        return (prev + 1) % reviews.length;
      });

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const review = reviews[current];

  return (
    <section className="reviews-section">

      <div className="reviews-heading">

        <p className="reviews-small-title">
          Customer Reviews
        </p>

        <h2>
          What Our Customers Say
        </h2>

        <p className="reviews-description">
          See what people are saying about their
          water delivery experience with JalMitra.
        </p>

      </div>


      <div className="review-card">

        <div className="review-top">

          <img
            src={review.image}
            alt={review.name}
            className="review-image"
          />

          <div className="review-user">

            <h3>
              {review.name}
            </h3>

            <div className="stars">
              {"★".repeat(review.rating)}
            </div>

          </div>

        </div>


        <p className="review-text">
          "{review.text}"
        </p>


        <div className="verified-review">
          ✓ Verified Customer
        </div>

      </div>


      <div className="review-dots">

        {reviews.map((_, index) => (

          <span
            key={index}
            className={
              index === current
                ? "active"
                : ""
            }
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </section>
  );
}

export default Reviews;