import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  IComment,
  ICommentContext,
  ICommentUpdate,
  IDefaultProviderProps,
  TCommentRequest,
  TListComments,
} from "./@types";

export const CommentContext = createContext({} as ICommentContext);

export const CommentProvider = ({ children }: IDefaultProviderProps) => {
  const [allComments, setAllComments] = useState<TListComments | []>([]);
  const [newCommentUser, setNewCommentUser] = useState<IComment | null>(null);


  useEffect(() => {
    const allComments = async () => {
      try {
        const response = await api.get<TListComments | []>(`/comments`);

        setAllComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allComments();
  }, []);

  const registerComment = async (formData: TCommentRequest) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.post<IComment>("/comments", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNewCommentUser(response.data);

        toast.success("Comment registered!");
      } catch (error) {
        console.log(error);

        toast.error("Comment was not registered!");
      }
    }
  };

  const editeComment = async (formData: ICommentUpdate, commentId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        const response = await api.patch<IComment>(
          `/comments/${commentId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newListComments = allComments.map((comment) => {
          if (comment.id === commentId) {
            return response.data;
          } else {
            return comment;
          }
        });

        setAllComments(newListComments);

        toast.success("Successfully changed!");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  const deleteComment = async (commentId: string) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      try {
        await api.delete(`/comments/${commentId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const commentFind = allComments.find(
          (comment) => comment.id === commentId
        );

        if (!commentFind) {
          toast.error("Comment Not Found!");
        } else {
          const newListComments = allComments.filter((comment) => {
            if (comment !== commentFind) {
              return comment;
            }
          });

          setAllComments(newListComments);

          toast.success("Successfully deleted!");
        }
      } catch (error) {
        console.log(error);

        toast.error("Unable to delete comment!");
      }
    }
  };

  return (
    <CommentContext.Provider
      value={{
        allComments,
        newCommentUser,
        setAllComments,
        setNewCommentUser,
        registerComment,
        editeComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
