/**
 * Created by senlin.ouyang on 2015/7/15.
 */
[
    'src/js/lib/jquery-2.1.4.js',
    'src/js/lib/jquery-qtips.js',
    'src/js/uc.js',
    /* Constants **/
    'src/js/constants/Constants.js',
    'src/js/constants/ErrorCode.js',
    /* Util **/
    'src/js/util/EventUtil.js',
    'src/js/util/HashMap.js',
    'src/js/util/WindowUtil.js',
    'src/js/util/TimeUtil.js',
    'src/js/util/EmotionUtil.js',
    'src/js/util/CollectionUtil.js',
    'src/js/util/StringUtil.js',
    'src/js/util/HtmlUtil.js',
    'src/js/util/FileDialogUtil.js',
    'src/js/util/StorageUtil.js',
    'src/js/util/PageUtil.js',
    'src/js/util/FileUtil.js',
    'src/js/util/ImageUtil.js',
    'src/js/util/AvatarUtil.js',
    'src/js/util/AudioUtil.js',
    'src/js/util/VideoUtil.js',
    'src/js/util/SystemUtil.js',
    'src/js/util/LogUtil.js',
    /* Interfaces **/
    'src/js/interfaces/IContactService.js',
    'src/js/interfaces/IContactEvent.js',
    'src/js/interfaces/IUIEvent.js',
    'src/js/interfaces/IUIService.js',
    'src/js/interfaces/IGroupService.js',
    'src/js/interfaces/IGroupEvent.js',
    'src/js/listener/event_config.js',
    'src/js/listener/service_config.js',
    'src/js/listener/native_event_config.js',
    'src/js/listener/native_service_config.js',
    'src/js/listener/manager.js',
    
    /* Components **/
    'src/js/interfaces/IClientService.js',
    'src/js/interfaces/IClientEvent.js',
    'src/js/service/UIService.js',
    'src/js/modules/component/TitleBarButton.js',
    'src/js/interfaces/IFSService.js',
    'src/js/interfaces/IFSEvent.js',
    'src/js/modules/component/PromptMessageBox.js',
    'src/js/modules/component/SwitchButton.js',
    
    /* ============ Modules ===============**/
    /* Contacts **/
    'src/js/modules/chooseCallContacts/ChooseCallContactsEventListener.js',
    'src/js/modules/chooseCallContacts/ChooseCallContactsManager.js',
    'src/js/modules/contacts/chooseContacts/ChooseContactsEventListener.js',
    'src/js/modules/contacts/chooseContacts/ChooseContactsManager.js',
    'src/js/modules/contacts/main/ContactMain.js',
    'src/js/modules/contacts/main/ContactMainEventListener.js',
    'src/js/modules/contacts/main/contact/ContactDataSet.js',
    'src/js/modules/contacts/main/contact/ContactStatusDataSet.js',
    'src/js/modules/contacts/main/contact/ContactManager.js',
    'src/js/modules/contacts/main/group/GroupDataSet.js',
    'src/js/modules/contacts/main/group/GroupEventListener.js',
    'src/js/modules/contacts/main/group/GroupManager.js',
    
    /* Profile **/
	'src/js/modules/contacts/profile/Me.js',
    'src/js/modules/contacts/profile/GroupProfile.js',
    'src/js/modules/contacts/profile/ProfileManager.js',
    'src/js/modules/contacts/profile/ProfileEventListener.js',
    
    /* Download Avatar **/
    'src/js/modules/image/ImageEventListener.js',
    'src/js/modules/image/ImageManager.js',    
    'src/js/lib/cropper.min.js',
    'src/js/modules/image/imageCropper.js'
]