const TextRenderLine = ({value, onChange}) => {
	const handleChange = event => {
    if (typeof onChange === 'function') {
    	onChange(event.currentTarget.value);
		}
	};
	return (
		<div className="type-text">
      <textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" value={value} onChange={handleChange} />
		</div>
	);
};
