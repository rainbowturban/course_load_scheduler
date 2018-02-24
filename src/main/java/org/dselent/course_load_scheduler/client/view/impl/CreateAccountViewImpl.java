package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.CreateAccountPresenter;
import org.dselent.course_load_scheduler.client.view.CreateAccountView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class CreateAccountViewImpl extends BaseViewImpl<CreateAccountPresenter> implements CreateAccountView {

	interface CreateAccountViewImplUiBinder extends UiBinder<Widget, CreateAccountViewImpl> {
	}
	private static CreateAccountViewImplUiBinder uiBinder = GWT.create(CreateAccountViewImplUiBinder.class);
	@UiField Label confirmPasswordLabel;
	@UiField PasswordTextBox confirmPasswordTextBox;
	@UiField Label createAccountLabel;
	@UiField VerticalPanel createAccountPanel;
	@UiField Label emailLabel;
	@UiField TextBox emailTextBox;
	@UiField ListBox facultyTypeComboBox;
	@UiField Label facultyTypeLabel;
	@UiField Label firstNameLabel;
	@UiField TextBox firstNameTextBox;
	@UiField Label lastNameLabel;
	@UiField TextBox lastNameTextBox;
	@UiField Label passwordLabel;
	@UiField PasswordTextBox passwordTextBox;
	@UiField Button submitButton;

	public CreateAccountViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public PasswordTextBox getConfirmPasswordTextBox() {
		return confirmPasswordTextBox;
	}

	public TextBox getEmailTextBox() {
		return emailTextBox;
	}

	public ListBox getFacultyTypeComboBox() {
		return facultyTypeComboBox;
	}

	public TextBox getFirstNameTextBox() {
		return firstNameTextBox;
	}

	public TextBox getLastNameTextBox() {
		return lastNameTextBox;
	}

	public PasswordTextBox getPasswordTextBox() {
		return passwordTextBox;
	}

	public Button getSubmitButton() {
		return submitButton;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return createAccountPanel;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@UiHandler("submitButton")
	void onSubmitButtonClick(ClickEvent event) {
		presenter.createAccount();
	}

	public void setConfirmPasswordTextBox(PasswordTextBox confirmPasswordTextBox) {
		this.confirmPasswordTextBox = confirmPasswordTextBox;
	}

	public void setEmailTextBox(TextBox emailTextBox) {
		this.emailTextBox = emailTextBox;
	}

	public void setFacultyTypeComboBox(ListBox facultyTypeComboBox) {
		this.facultyTypeComboBox = facultyTypeComboBox;
	}

	public void setFirstNameTextBox(TextBox firstNameTextBox) {
		this.firstNameTextBox = firstNameTextBox;
	}

	public void setLastNameTextBox(TextBox lastNameTextBox) {
		this.lastNameTextBox = lastNameTextBox;
	}

	public void setPasswordTextBox(PasswordTextBox passwordTextBox) {
		this.passwordTextBox = passwordTextBox;
	}

	@Override
	public void setPresenter(CreateAccountPresenter presenter) {
		this.presenter = presenter;
	}

	public void setSubmitButton(Button submitButton) {
		this.submitButton = submitButton;
	}

	@Override
	public void showErrorMessages(String errorMessages) {
		Window.alert(errorMessages);
	}

}
