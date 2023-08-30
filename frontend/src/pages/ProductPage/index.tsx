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
} from "./style";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
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
    commentsCarId,
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
    }
  }, [])

  useEffect(() => {
    const product: TCarDataIdResponse | undefined = allcars.find(
      (car) => car.id === productId
    );

    if (product) {
      setProductDetails(product);

      // setCommentsCarId(product.comments);
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
    reset();
    await registerComment(commentData);
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
              <button>Comprar</button>
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
            <LinkTag to={`/userPage/${productDetails?.user.id}`}>
              Ver todos os anúncios
            </LinkTag>
          </AdvertiserSection>
          <CommentsSection>
            <h3>Comentários</h3>
            <ListOfComments>
              {commentsCarId?.length === 0 ? (
                <h3>Seja o primeiro a comentar</h3>
              ) : (
                commentsCarId?.map((comment) => (
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
              {errors.description?.message}
              <form id="form-description" onClick={handleSubmit(submit)}>
                <input type="submit" value="Comentar" />
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
              to={`/userPage/${productDetails?.user.id}`}
              onClick={() => searchCarsUserId(productDetails!.user.id)}
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
