import { Checkbox, CheckboxProps, Grid } from "@chakra-ui/react";
import React from "react";

const CheckboxStyle: CheckboxProps = {
  size: "lg",
  colorScheme: "red",
};

type DispositionFilterProps = {
  selectedDisposition: string[];
  onHandleDispositionChange: (e: any) => void;
};

const DispositionFilter = ({
  selectedDisposition,
  onHandleDispositionChange,
}: DispositionFilterProps) => {
  return (
    <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={"1rem"} mt={"0.7rem"}>
      <Checkbox
        {...CheckboxStyle}
        value={"1+kk"}
        isChecked={selectedDisposition.includes("1+kk")}
        onChange={onHandleDispositionChange}
      >
        1+kk
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"1+1"}
        isChecked={selectedDisposition.includes("1+1")}
        onChange={onHandleDispositionChange}
      >
        1+1
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"2+kk"}
        isChecked={selectedDisposition.includes("2+kk")}
        onChange={onHandleDispositionChange}
      >
        2+kk
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"2+1"}
        isChecked={selectedDisposition.includes("2+1")}
        onChange={onHandleDispositionChange}
      >
        2+1
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"3+kk"}
        isChecked={selectedDisposition.includes("3+kk")}
        onChange={onHandleDispositionChange}
      >
        3+kk
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"3+1"}
        isChecked={selectedDisposition.includes("3+1")}
        onChange={onHandleDispositionChange}
      >
        3+1
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"4+kk"}
        isChecked={selectedDisposition.includes("4+kk")}
        onChange={onHandleDispositionChange}
      >
        4+kk
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"4+1"}
        isChecked={selectedDisposition.includes("4+1")}
        onChange={onHandleDispositionChange}
      >
        4+1
      </Checkbox>
      <Checkbox
        {...CheckboxStyle}
        value={"5+kk"}
        isChecked={selectedDisposition.includes("5+kk")}
        onChange={onHandleDispositionChange}
      >
        5+kk
      </Checkbox>
    </Grid>
  );
};

export default DispositionFilter;
