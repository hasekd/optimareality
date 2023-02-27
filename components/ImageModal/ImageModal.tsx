import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  chakra,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mainImage: any;
  data: any;
  prevImage: () => void;
  nextImage: () => void;
  imageIndex: number;
  images: any;
};

const ImageModal = ({
  isOpen,
  onClose,
  mainImage,
  data,
  prevImage,
  nextImage,
  imageIndex,
  images,
}: ImageModalProps) => {
  const Icon = chakra(FontAwesomeIcon);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Image
          loader={() => mainImage}
          src={mainImage}
          alt={data.attributes.title}
          width={500}
          height={0}
          style={{ width: "auto", height: "auto" }}
        />
        <Flex
          justify={"center"}
          align={"center"}
          gap={"1rem"}
          bgColor={"#000"}
          color={"#fff"}
          h={"8rem"}
        >
          <Icon
            icon={faChevronLeft}
            w={"4rem"}
            h={"4rem"}
            cursor={"pointer"}
            onClick={prevImage}
          />
          <Text fontSize={"1.5rem"}>
            {imageIndex + 1} / {images.length}
          </Text>
          <Icon
            icon={faChevronRight}
            w={"4rem"}
            h={"4rem"}
            cursor={"pointer"}
            onClick={nextImage}
          />
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
