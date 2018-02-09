package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.LoginPresenter;
import org.dselent.course_load_scheduler.client.view.LoginView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;


public class LoginViewImpl extends BaseViewImpl<LoginPresenter> implements LoginView
{
	private static LoginViewImplUiBinder uiBinder = GWT.create(LoginViewImplUiBinder.class);
	
	interface LoginViewImplUiBinder extends UiBinder<Widget, LoginViewImpl>{}
			
	@UiField
	Label viewLabel;
	
	@UiField
	Label nameLabel;
	
	@UiField
	Label passwordLabel;
	
	@UiField
	Label warningLabel;
	
	@UiField
	TextBox nameTextBox;
	
	@UiField
	TextBox passwordTextBox;
	
	@UiField
	Button loginButton;
	
	@UiField
	VerticalPanel loginPanel;
	
	public LoginViewImpl()
	{
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	@Override
	public TextBox getNameTextBox()
	{
		return nameTextBox;
	}

	@Override
	public void setNameTextBox(TextBox nameTextBox)
	{
		this.nameTextBox = nameTextBox;
	}

	@Override
	public TextBox getPasswordTextBox()
	{
		return passwordTextBox;
	}

	@Override
	public void setPasswordTextBox(TextBox passwordTextBox)
	{
		this.passwordTextBox = passwordTextBox;
	}
	
	@Override
	public Button getLoginButton()
	{
		return loginButton;
	}

	@Override
	public void setPresenter(LoginPresenter presenter)
	{
		this.presenter = presenter;
	}
	
	@Override
	public void showErrorMessages(String errorMessages)
	{
		Window.alert(errorMessages);
	}
	
	@Override
	public Widget getWidgetContainer()
	{
		return this;
	}
	
	@Override
	public HasWidgets getViewRootPanel()
	{
		return loginPanel;
	}
	
	@UiHandler("loginButton")
	void onloginButtonClicked(ClickEvent evt)
	{
		presenter.login();
	}

}
