//constants
import { TEXT_PREVIEW_CHAR_LENGTH } from "./constants";

export const getTimeAgo = (time) => {
  return new Date(time * 1000).toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const getPreviewText = (hasLinkToArticle, text) => {
  if (hasLinkToArticle) {
    return `${text.substring(0, TEXT_PREVIEW_CHAR_LENGTH)}...`;
  }
  return text;
};

