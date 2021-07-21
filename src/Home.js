import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Product from "./Product";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const finalSpaceCharacters = [
  //  👉 NOTE : all the table data i have fetch using axios
  // but the below just 3 HERO CARD data I have hard coded.
  {
    id: "113",
    name: "FB",
    thumb:
      "https://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png",
  },
  {
    id: "101",
    name: "Google",
    thumb:
      "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png",
  },
  {
    id: "141",
    name: "AMZN",
    thumb:
      "https://air-marketing-assets.s3.amazonaws.com/blog/logo-db/amazon-logo-png/amazon-logo-png-svg-4.svg",
  },
];

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="main_b">
                          <div className="top_bax">
                            <div className="gg">
                              <p>{name}</p>
                              <img src={thumb} />
                            </div>
                            <div>
                              <h1>{id}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      ;
      <div className="coin-app">
        <form className="form_f">
          <strong>Stock Detail TABLE</strong>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
        <div className="coin-search"></div>

        {filteredCoins.map((coin) => {
          return (
            <>
              <Product
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
