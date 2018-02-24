package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.CreateAccountPresenter;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;

public interface CreateAccountView extends BaseView<CreateAccountPresenter> {
	
	TextBox getFirstNameTextBox();
	void setFirstNameTextBox(TextBox firstNameTextBox);
	TextBox getLastNameTextBox();
	void setLastNameTextBox(TextBox lastNameTextBox);
	ListBox getFacultyTypeComboBox();
	void setFacultyTypeComboBox(ListBox facultyTypeListBox);
	TextBox getEmailTextBox();
	void setEmailTextBox(TextBox emailTextBox);
	PasswordTextBox getPasswordTextBox();
	void setPasswordTextBox(PasswordTextBox passwordTextBox);
	PasswordTextBox getConfirmPasswordTextBox();
	void setConfirmPasswordTextBox(PasswordTextBox confirmPasswordTextBox);
	Button getSubmitButton();
	void showErrorMessages(String errorMessages);
}
