export const ROUTER_PATH = {
  HOME: '/',

  LOGIN: '/login',
  REGISTER: '/register',
  REGISTER_SUCCESFUL: '/register_successful',

  ACCOUNT_NO_ACTIVE: '/account_no_active',
  ACCOUNT_CONFIRM: '/account_confirm/:uid/:token',

  RESTORE_PASSWORD: '/restore_password',
  SET_NEW_PASSWORD: '/set_new_password/:uid/:token',
  PASSWORD_CHANGED: '/password_changed',
    
  NEWS: '/news',

  INFORMATIONS: '/informations',

  DIETS: '/diets',
  DIET_QUESTIONNAIRE: '/diet/:diet_type/questionnaire',
  DIET_PURCHASED: '/diet/purchased_status',

  CALCULATORS: '/calculators',
  BMI: '/calculators/bmi',
  BMR: '/calculators/bmr',
  CHECK_PRODUCT: '/calculators/check_product',

  USER_PANEL: '/user_panel',
  USER_PROFIL: '/user_panel/user_profil',
  ADD_PARAMETERS: '/user_panel/user_profil/add_parameters',
  MY_DIETS: '/user_panel/my_diets',
  MY_MEALS: '/user_panel/my_meals',
  USER_SETTINGS: '/user_panel/user_settings',

  NO_PERMISSIONS: '/no_permissions',

  ADMIN_ORDERS: 'admin/orders',
  ADMIN_ORDER_CHOSE: 'admin/orders/:order_id',
  ADMIN_DIETS: 'admin/diets',
  ADMIN_MESSAGES: 'admin/messages',

};