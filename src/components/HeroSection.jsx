import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const HeroSection = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="md" md="8">
          <div className="text-primary container p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
            porro eos nemo tempore ad distinctio! Aliquid aliquam voluptatem
            mollitia, voluptatum odit et eligendi ipsum, maiores natus quas,
            aspernatur ducimus!
          </div>
        </MDBCol>

        <MDBCol size="md" md="4">
          <div className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod,
            obcaecati nisi perspiciatis quaerat ut labore, repellat ea suscipit
            facere voluptatum non eligendi. Necessitatibus eum provident quos
            itaque. Vero, autem?
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default HeroSection;
