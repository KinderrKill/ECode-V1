type SubmitButtonProps = {
  submitFunction: () => void
  value: string
}

export default function SubmitButton(props: SubmitButtonProps) {
  return <button onSubmit={props.submitFunction}>{props.value}</button>
}
