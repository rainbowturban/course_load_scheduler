package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.CreateAccountPresenter;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;

public interface CreateAccountView extends BaseView<CreateAccountPresenter> {
	
	TextBox getUserNameTextBox();
	void setUserNameTextBox(TextBox nameTextBox);
	PasswordTextBox getPasswordTextBox();
	void setPasswordTextBox(PasswordTextBox passwordTextBox);
	Button getCreateAccountButton();
	void showErrorMessages(String errorMessages);
}
