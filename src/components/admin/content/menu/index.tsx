import React, {useEffect, useState} from 'react';
import Item from './item';
import ModalCUD, {MODE_ADD, MODE_DELETE, MODE_EDIT} from './modalCUD';
import {useAppDispatch, useAppSelector} from 'core/store/hook';
import {fetchMenuList} from 'core/store/slices/menu';
import {Menu as MenuType} from 'core/store/defines/menu';

const Menu: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuType>({id: '', index: 0, link: '', title: ''});
  const [modalMode, setModalMode] = useState(MODE_ADD);
  const headers = useAppSelector(state => state.menu);
  const isLoading = useAppSelector(state => state.menu.isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchMenuList());
    }

    fetchData();
  }, []);
  const updateMenu = (menu: MenuType) => {
    setModalMode(MODE_EDIT);
    // @ts-ignore
    setSelectedItem(menu);
    setIsShowModal(true);
  };
  const addMenu = () => {
    setModalMode(MODE_ADD);
    setIsShowModal(true);
  };
  const deleteMenu = (menu: MenuType) => {
    setModalMode(MODE_DELETE);
    // @ts-ignore
    setSelectedItem(menu);
    setIsShowModal(true);
  };
  const closeModal = (isDone: boolean) => {
    setIsShowModal(false);
    setSelectedItem({id: '', index: 0, link: '', title: ''});
    if (isDone) {
      dispatch(fetchMenuList());
    }
  };
  return (
    <div>
      {isLoading ? <div></div> :
        <div className={'menu'}>
          <div className={'menu__title text-align-center text-bold mt8'}>
                    DANH SÁCH MENU HEADER
          </div>
          <div className={'menu__content'}>
            {headers.listMenu.map(item => <Item key={item.id} item={item} onUpdate={updateMenu} onDelete={deleteMenu}/>)}
          </div>
          <div onClick={() => addMenu()} className={'menu__btn-add t-button'}>
                    Thêm
          </div>
          <ModalCUD isShowing={isShowModal} item={selectedItem} onCloseModal={closeModal} mode={modalMode}/>
        </div>}
    </div>
  );
};

export default Menu;