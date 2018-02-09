package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.LoginPresenter;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;

public interface LoginView extends BaseView<LoginPresenter>
{
	TextBox getNameTextBox();
	void setNameTextBox(TextBox nameTextBox);
	TextBox getPasswordTextBox();
	void setPasswordTextBox(TextBox passwordTextBox);
	Button getLoginButton();
	void showErrorMessages(String errorMessages);
}
