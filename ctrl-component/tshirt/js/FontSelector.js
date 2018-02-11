const FontSelector = ({fonts, selected, onSelect}) => {
    const selectHandle = (event) => {
      if (typeof onSelect === 'function') {
        onSelect(fonts.find(f => f.name === event.currentTarget.value));
      }
    };

    return (
        <div className="font-picker">
          {fonts.map(font => {
            return (
              <div className="grid center font-item">
                <input type="radio"
                       name="font"
                       value={font.name}
                       id={font.name}
                       onChange={selectHandle}
                       checked={selected && selected.name === font.name}
                />
                  <label htmlFor={font.name} className="grid-1">
                    <PictureFont text="abc" path={font.path}/>
                  </label>
              </div>
            );
          })}
        </div>
    )
};