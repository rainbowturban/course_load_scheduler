package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.CreateAccountPresenter;
import org.dselent.course_load_scheduler.client.view.CreateAccountView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasWidgets;

public class CreateAccountViewImpl extends BaseViewImpl<CreateAccountPresenter> implements CreateAccountView {

	private static CreateAccountViewImplUiBinder uiBinder = GWT.create(CreateAccountViewImplUiBinder.class);
	@UiField Label createAccountLabel;
	@UiField Label firstNameLabel;
	@UiField TextBox firstNameTextBox;
	@UiField TextBox lastNameTextBox;
	@UiField Label lastNameLabel;
	@UiField Label facultyTypeLabel;
	@UiField ListBox facultyTypeComboBox;
	@UiField TextBox emailTextBox;
	@UiField Label emailLabel;
	@UiField PasswordTextBox passwordTextBox;
	@UiField Label passwordLabel;
	@UiField Label confirmPasswordLabel;
	@UiField PasswordTextBox comfirmPasswordTextBox;
	@UiField Button submitButton;

	interface CreateAccountViewImplUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}

	public CreateAccountViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public TextBox getFirstNameTextBox() {
		return firstNameTextBox;
	}

	public void setFirstNameTextBox(TextBox firstNameTextBox) {
		this.firstNameTextBox = firstNameTextBox;
	}

	public TextBox getLastNameTextBox() {
		return lastNameTextBox;
	}

	public void setLastNameTextBox(TextBox lastNameTextBox) {
		this.lastNameTextBox = lastNameTextBox;
	}

	public ListBox getFacultyTypeComboBox() {
		return facultyTypeComboBox;
	}

	public void setFacultyTypeComboBox(ListBox facultyTypeComboBox) {
		this.facultyTypeComboBox = facultyTypeComboBox;
	}

	public TextBox getEmailTextBox() {
		return emailTextBox;
	}

	public void setEmailTextBox(TextBox emailTextBox) {
		this.emailTextBox = emailTextBox;
	}

	public PasswordTextBox getPasswordTextBox() {
		return passwordTextBox;
	}

	public void setPasswordTextBox(PasswordTextBox passwordTextBox) {
		this.passwordTextBox = passwordTextBox;
	}

	public PasswordTextBox getComfirmPasswordTextBox() {
		return comfirmPasswordTextBox;
	}

	public void setComfirmPasswordTextBox(PasswordTextBox comfirmPasswordTextBox) {
		this.comfirmPasswordTextBox = comfirmPasswordTextBox;
	}

	public Button getSubmitButton() {
		return submitButton;
	}

	public void setSubmitButton(Button submitButton) {
		this.submitButton = submitButton;
	}

	@Override
	public void setPresenter(CreateAccountPresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TextBox getUserNameTextBox() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setUserNameTextBox(TextBox nameTextBox) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Button getCreateAccountButton() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void showErrorMessages(String errorMessages) {
		// TODO Auto-generated method stub
		
	}

}
