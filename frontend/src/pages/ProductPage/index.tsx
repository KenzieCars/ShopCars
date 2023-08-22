import {
  ContainerShop,
  AdvertiserSection,
  AdvertiserSectionDesktop,
  Aside,
  CardComment,
  CommentsSection,
  Description,
  FigureContainer,
  InfoSection,
  KmContainer,
  ListOfComments,
  PicturesContainer,
  PicturesContainerDesktop,
  PostAComment,
  PriceContainer,
  ProductMainContainer,
  InfoAndDescriptionContainer,
} from "./style";
import Footer from "../../components/Footer";
import { Header } from "../../components/header";

const ProductPage = () => {
  return (
    <>
      <ContainerShop>
        <ProductMainContainer>
          <Header />
          <FigureContainer>
            <img
              src="https://cdn.motor1.com/images/mgl/m7k2v/s3/2022-kia-sportage.jpg"
              alt="car image"
            />
          </FigureContainer>
          <InfoAndDescriptionContainer>
            <InfoSection>
              <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h2>
              <KmContainer>
                <span>2013</span>
                <span>45.900 KM</span>
              </KmContainer>
              <PriceContainer>
                <span>R$00.0000.00</span>
              </PriceContainer>
              <button>Comprar</button>
            </InfoSection>
            <Description>
              <h3>Descrição</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione eos sit consequuntur fugit! Temporibus tempora vero aut
                magnam facere distinctio ratione quia! Doloremque cupiditate
                quasi fugiat asperiores expedita illum rem.
              </p>
            </Description>
          </InfoAndDescriptionContainer>
          <PicturesContainer>
            <h3>Fotos</h3>
            <div>
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
            </div>
          </PicturesContainer>
          <AdvertiserSection>
            <span>SL</span>
            <span>Samuel Leao</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Ver todos os anúncios</button>
          </AdvertiserSection>
          <CommentsSection>
            <h3>Comentários</h3>
            <ListOfComments>
              <CardComment>
                <section>
                  <div>JL</div>
                  <span>John Lennon</span>
                  <span>há 3 dias</span>
                </section>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores sequi totam consequatur non libero ad sit
                  voluptatem ipsam, quam tempora iure voluptatibus debitis,
                  beatae, maxime optio officiis! Dolorem, numquam id?
                </p>
              </CardComment>
              <CardComment>
                <section>
                  <div>JL</div>
                  <span>John Lennon</span>
                  <span>há 3 dias</span>
                </section>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores sequi totam consequatur non libero ad sit
                  voluptatem ipsam, quam tempora iure voluptatibus debitis,
                  beatae, maxime optio officiis! Dolorem, numquam id?
                </p>
              </CardComment>
              <CardComment>
                <section>
                  <div>JL</div>
                  <span>John Lennon</span>
                  <span>há 3 dias</span>
                </section>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores sequi totam consequatur non libero ad sit
                  voluptatem ipsam, quam tempora iure voluptatibus debitis,
                  beatae, maxime optio officiis! Dolorem, numquam id?
                </p>
              </CardComment>
            </ListOfComments>
          </CommentsSection>
          <PostAComment>
            <div>
              <span>SL</span>
              <span>Samuel Leao</span>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Me conte sua experiência com o carro"
            ></textarea>
            <button>Comentar</button>
          </PostAComment>
        </ProductMainContainer>

        <Aside>
          <PicturesContainerDesktop>
            <h3>Fotos</h3>
            <div>
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
              <img
                src="https://www.usnews.com/object/image/00000182-a544-dc41-a1db-a56f118e0000/2a_2021_kia_telluride.jpg?update-time=&size=responsive640"
                alt=""
              />
            </div>
          </PicturesContainerDesktop>
          <AdvertiserSectionDesktop>
            <span>SL</span>
            <span>Samuel Leao</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Ver todos os anúncios</button>
          </AdvertiserSectionDesktop>
        </Aside>
      </ContainerShop>
      <Footer />
    </>
  );
};

export default ProductPage;
