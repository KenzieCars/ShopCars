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
  LinkTag,
  SchemaMessage,
} from "./style";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../providers/CarProvider/CarContext";
import { TCarDataIdResponse } from "../../providers/CarProvider/@types";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { ModalImageProduct } from "../../components/ModalImageProduct";
import { ImageContext } from "../../providers/ImageProvider/ImageContext";
import {
  IFormComment,
  TCommentRequest,
  TCommentUserResponse,
} from "../../providers/CommentProvider/@types";
import { GiFlatTire } from "react-icons/gi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentContext } from "../../providers/CommentProvider/CommentContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalEditAndDeleteComments } from "../../components/ModalEditAndDeleteComments";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProductPage = () => {
  const { productId } = useParams();
  const { allcars, allCarsRegistered } = useContext(CarContext);
  const { userIdCars } = useContext(UserContext);
  const { modalImage, setModalImage, setImageById } = useContext(ImageContext);
  const [productDetails, setProductDetails] =
    useState<TCarDataIdResponse | null>(null);

  const token = localStorage.getItem("@userToken");

  const {
    registerComment,
    setCommentsCarId,
    isModalComment,
    setIsModalComment,
    setCommentOneById,
    allComments,

  } = useContext(CommentContext);

  const schema = z.object({
    description: z.string().nonempty("Diga algo sobre o anúncio"),
  });


  const userId: string | null = localStorage.getItem("@userId") || "null";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormComment>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const commentsProduct: TCommentUserResponse[] | undefined = allComments.filter(
      (comment) => comment.carId === productId
    )
    if (commentsProduct.length > 0) {
      setCommentsCarId(commentsProduct);
      localStorage.setItem("@commentsCarSelect", JSON.stringify(commentsProduct));
    }
  }, [])

  const commentsCarFounded: TCommentUserResponse[] | null = JSON.parse(localStorage.getItem('@commentsCarSelect') || 'null')

  useEffect(() => {
    const product: TCarDataIdResponse | undefined = allcars.find(
      (car) => car.id === productId
    );

    if (product) {
      setProductDetails(product);

    }
  }, [allcars, productId, productDetails]);

  useEffect(() => {
    // Rolar para o topo da página quando o componente for montado
    window.scrollTo(0, 0);
  }, []);

  const searchCarsUserId = (userId: string) => {
    const carsSearch = allCarsRegistered.filter(
      (car) => car.user.id === userId
    );

    localStorage.setItem("@carsSellerSelect", JSON.stringify(carsSearch));
  };

  const getImageProduct = (img: string) => {
    setModalImage(!modalImage);
    setImageById(img);
  };

  const getCommentById = (comment: TCommentUserResponse) => {
    setIsModalComment(!isModalComment);
    setCommentOneById(comment);
  };

  const submit: SubmitHandler<IFormComment> = async (formData) => {
    const commentData: TCommentRequest = {
      ...formData,
      carId: productId!,
    };

    reset({
      description: '', // Clear the description field
    })
    await registerComment(commentData);
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const openWhatsAppInNewTab = () => {
    window.open(
      `https://wa.me/+55${productDetails?.user.cellPhone}?text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20an%C3%BAncio%20no%20site%20Motors%20Shop%2C%20gostaria%20de%20negociar%20a%20compra%20do%20ve%C3%ADculo`,
      "_blank"
    );
  };

  return (
    <>
      <ContainerShop>
        <ProductMainContainer>
          <Header />
          <FigureContainer>
            <img src={productDetails?.imgCover} alt={productDetails?.model} />
          </FigureContainer>
          <InfoAndDescriptionContainer>
            <InfoSection>
              <h2>
                {productDetails?.brand} - {productDetails?.model}
              </h2>
              <KmContainer>
                <span>{productDetails?.year}</span>
                <span>{productDetails?.km}</span>
              </KmContainer>
              <PriceContainer>
                <span>R$ {productDetails?.price}</span>
              </PriceContainer>
              {token && (
                <button
                  type="button"
                  onClick={() => {
                    openWhatsAppInNewTab();
                  }}
                >
                  Comprar
                </button>
              )}
              {!token && (
                <button type="button" onClick={handleLoginClick}>
                  Faça o login para Comprar
                </button>
              )}
            </InfoSection>
            <Description>
              <h3>Descrição</h3>
              <p>{productDetails?.description}</p>
            </Description>
          </InfoAndDescriptionContainer>
          <PicturesContainer>
            <h3>Fotos</h3>
            <div>
              {productDetails?.images && productDetails.images.length > 0 ? (
                productDetails.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.imgGalery}
                    alt="Imagens do carro do anunciante"
                    onClick={() => getImageProduct(img.imgGalery)}
                  />
                ))
              ) : (
                <span>
                  Sem fotos adicionais <GiFlatTire />
                </span>
              )}
            </div>
          </PicturesContainer>
          <AdvertiserSection>
            <span>{productDetails?.user.name[0]}</span>
            <span>{productDetails?.user.name}</span>
            <p>{productDetails?.user.description}</p>
            <LinkTag
              to={`/user/${productDetails?.user.id}`}
              onClick={() => {
              searchCarsUserId(productDetails!.user.id)
              }}
            >
              Ver todos os anúncios
            </LinkTag>
          </AdvertiserSection>
          <CommentsSection>
            <h3>Comentários</h3>
            <ListOfComments>

              {commentsCarFounded?.length === 0 ? (
                <h3>Seja o primeiro a comentar</h3>
              ) : (
                commentsCarFounded?.map((comment) => (
                  <CardComment key={comment!.id}>
                    <section>
                      <div>{comment.user?.name[0]}</div>
                      <span>{comment.user?.name}</span>
                      <span>Há {comment!.createdAtString}</span>
                    </section>

                    <p>{comment!.description}</p>
                    {comment!.userId === userId && (
                      <BsThreeDotsVertical
                        className="open_modal_comments"
                        onClick={() => getCommentById(comment)}
                      />
                    )}
                  </CardComment>
                ))
              )}
            </ListOfComments>
          </CommentsSection>
          {token && (
            <PostAComment>
              <div>
                <span>{userIdCars?.name[0]}</span>
                <span>{userIdCars?.name}</span>
              </div>
              <textarea
                form="form-description"
                placeholder="Me conte sua experiência com o carro"
                {...register("description")}
              />
              <SchemaMessage>{errors && errors.description?.message}</SchemaMessage>
              <form id="form-description" onClick={handleSubmit(submit)}>
                <button type="submit">Comentar</button>
              </form>
            </PostAComment>
          )}
        </ProductMainContainer>
        <Aside>
          <PicturesContainerDesktop>
            <h3>Fotos</h3>
            <div>
              {productDetails?.images && productDetails.images.length > 0 ? (
                productDetails.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.imgGalery}
                    alt="Imagens do carro do anunciante"
                    onClick={() => getImageProduct(img.imgGalery)}
                  />
                ))
              ) : (
                <span>
                  Sem fotos adicionais <GiFlatTire />
                </span>
              )}
            </div>
          </PicturesContainerDesktop>
          <AdvertiserSectionDesktop>
            <span>{productDetails?.user.name[0]}</span>
            <span>{productDetails?.user.name}</span>
            <p>{productDetails?.user.description}</p>
            <LinkTag
              to={`/user/${productDetails?.user.id}`}
              onClick={() => {
              searchCarsUserId(productDetails!.user.id)
              }}
            >
              Ver todos os anúncios
            </LinkTag>
          </AdvertiserSectionDesktop>
        </Aside>
        {modalImage && <ModalImageProduct />}
        {isModalComment && <ModalEditAndDeleteComments />}
      </ContainerShop>
      <Footer />
    </>
  );
};

export default ProductPage;
