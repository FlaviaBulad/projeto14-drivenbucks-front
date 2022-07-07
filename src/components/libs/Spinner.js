import React from "react";

import { ThreeDots } from "react-loader-spinner";

import styled from "styled-components";

export default function Spinner() {
  return <ThreeDots height="10" color="white" ariaLabel="loading" />;
}
