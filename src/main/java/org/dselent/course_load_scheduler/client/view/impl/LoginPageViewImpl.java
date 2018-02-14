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

public class LoginPageViewImpl extends BaseViewImpl<LoginPagePresenter> implements LoginPageView {

	private static LoginPageViewImplUiBinder uiBinder = GWT.create(LoginPageViewImplUiBinder.class);
	@UiField TextBox userNameTextBox;
	@UiField Label userNameLabel;
	@UiField Image logoImage;
	@UiField Label loginTitle;
	@UiField Label passwordLabel;
	@UiField PasswordTextBox passwordTextBox;
	@UiField Button createAccountButton;
	@UiField Button loginButton;
	@UiField VerticalPanel loginPagePanel;

	interface LoginPageViewImplUiBinder extends UiBinder<Widget, LoginPageViewImpl> {
	}

	public LoginPageViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	public TextBox getUserNameTextBox() {
		return userNameTextBox;
	}

	public void setUserNameTextBox(TextBox userNameTextBox) {
		this.userNameTextBox = userNameTextBox;
	}

	public PasswordTextBox getPasswordTextBox() {
		return passwordTextBox;
	}

	public void setPasswordTextBox(PasswordTextBox passwordTextBox) {
		this.passwordTextBox = passwordTextBox;
	}

	public Button getCreateAccountButton() {
		return createAccountButton;
	}

	public void setCreateAccountButton(Button createAccountButton) {
		this.createAccountButton = createAccountButton;
	}

	public Button getLoginButton() {
		return loginButton;
	}

	public void setLoginButton(Button loginButton) {
		this.loginButton = loginButton;
	}

	@Override
	public void setPresenter(LoginPagePresenter presenter) {
		this.presenter = presenter;		
	}
	
	@Override
	public void showErrorMessages(String errorMessages) {
		Window.alert(errorMessages);		
	}
	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return loginPagePanel;
	}

}
