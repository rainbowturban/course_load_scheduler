package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.LoginPagePresenter;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;

public interface LoginPageView extends BaseView<LoginPagePresenter> {
	
	TextBox getUserNameTextBox();
	void setUserNameTextBox(TextBox nameTextBox);
	PasswordTextBox getPasswordTextBox();
	void setPasswordTextBox(PasswordTextBox passwordTextBox);
	Button getLoginButton();
	Button getCreateAccountButton();
	void showErrorMessages(String errorMessages);
}
