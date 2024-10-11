import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h1>Welcome to Next.js with SSR</h1>
      <p>Data fetched from the server: {data.message}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an API or other sources
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  // Return the data as props to the Home component
  return {
    props: {
      data,
    },
  };
}

export default Home;