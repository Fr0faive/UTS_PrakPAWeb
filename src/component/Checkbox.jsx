export const Checkbox = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center my-2 gap-3">
      <input type="checkbox" className="checkbox bg-white border-gray-700" />
      <span className="label-text text-gray-700">{children}</span>
    </div>
  );
};
