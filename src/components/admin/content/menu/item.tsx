import React from 'react';
import {Menu as MenuType} from 'core/store/defines/menu';
interface defineProp{
  item: MenuType,
  onUpdate: Function,
  onDelete: Function,
}

const Item = (props: defineProp) => {
  const {item, onUpdate, onDelete} = props;
  return (
    <div className={'menu-item__bounder'}>
      <div className={'d-flex'}>
        <table>
          <tr>
            <td className={'w-30'}>
                            Thứ tự:
            </td>
            <td>
              {item.index}
            </td>
          </tr>
          <tr>
            <td>
                            Tiêu đề:
            </td>
            <td>
              {item.title}
            </td>
          </tr>
          <tr>
            <td>
                            Link:
            </td>
            <td>
              {item.link}
            </td>
          </tr>
        </table>
        <div className={'w-30'}>
          <div onClick={() => onUpdate(item)} className={'menu__btn-edit t-button'}>
                        Sửa
          </div>
          <div onClick={() => onDelete(item)} className={'menu__btn-delete t-button mt8'}>
                        Xóa
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;