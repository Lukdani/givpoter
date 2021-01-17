import { ChangeEvent, useState } from "react";

const useForm = (initialState: any) => {
  const [data, setData] = useState(initialState);
  const [formDisabled, setFormDisabled] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event?.target.name;
    const value = event?.target.value;
    const copiedData = { ...data };
    copiedData[name] = value;
    setData(copiedData);
  };

  const handleSelectChange = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    const name = event?.target.name;
    const value = event?.target.value;
    const copiedData = { ...data };
    if (name) copiedData[name] = value;
    setData(copiedData);
  };

  const handleDateChange = (date: Date | null, fieldName: string) => {
    const name = fieldName;
    const value = date;
    const copiedData = { ...data };
    copiedData[name] = value;
    setData(copiedData);
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event?.target.name;
    const value = event?.target.checked;
    const copiedData = { ...data };
    copiedData[name] = value;
    setData(copiedData);
  };

  const enableForm = () => {
    setFormDisabled(false);
  };

  const disableForm = () => {
    setFormDisabled(true);
  };

  const resetForm = () => {
    setData(initialState);
  };

  return {
    data,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    handleCheckboxChange,
    formDisabled,
    enableForm,
    disableForm,
    resetForm,
  };
};

export default useForm;
