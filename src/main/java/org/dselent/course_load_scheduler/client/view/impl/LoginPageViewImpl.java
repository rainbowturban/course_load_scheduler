package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.LoginPagePresenter;
import org.dselent.course_load_scheduler.client.view.LoginPageView;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class LoginPageViewImpl extends BaseViewImpl<LoginPagePresenter> implements LoginPageView {

	interface LoginPageViewImplUiBinder extends UiBinder<Widget, LoginPageViewImpl> {
	}
	private static LoginPageViewImplUiBinder uiBinder = GWT.create(LoginPageViewImplUiBinder.class);
	@UiField Button createAccountButton;
	@UiField Button loginButton;
	@UiField VerticalPanel loginPagePanel;
	@UiField Label loginTitle;
	@UiField Image logoImage;
	@UiField Label passwordLabel;
	@UiField PasswordTextBox passwordTextBox;
	@UiField Label userNameLabel;

	@UiField TextBox userNameTextBox;

	public LoginPageViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public Button getCreateAccountButton() {
		return createAccountButton;
	}

	public Button getLoginButton() {
		return loginButton;
	}

	public PasswordTextBox getPasswordTextBox() {
		return passwordTextBox;
	}

	public TextBox getUserNameTextBox() {
		return userNameTextBox;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return loginPagePanel;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	public void setCreateAccountButton(Button createAccountButton) {
		this.createAccountButton = createAccountButton;
	}

	public void setLoginButton(Button loginButton) {
		this.loginButton = loginButton;
	}

	public void setPasswordTextBox(PasswordTextBox passwordTextBox) {
		this.passwordTextBox = passwordTextBox;
	}
	
	@Override
	public void setPresenter(LoginPagePresenter presenter) {
		this.presenter = presenter;		
	}
	
	public void setUserNameTextBox(TextBox userNameTextBox) {
		this.userNameTextBox = userNameTextBox;
	}

	@Override
	public void showErrorMessages(String errorMessages) {
		Window.alert(errorMessages);		
	}

	@UiHandler("loginButton")
	void onLoginButtonClick(ClickEvent event) {
		presenter.login();
	}
	
	@UiHandler("createAccountButton")
	void onCreateAccountButtonClick(ClickEvent event) {
		presenter.loadCreateAccount();
	}

}
