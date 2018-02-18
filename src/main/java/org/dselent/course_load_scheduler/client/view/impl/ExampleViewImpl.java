package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.ExamplePresenter;
import org.dselent.course_load_scheduler.client.view.ExampleView;
import org.dselent.course_load_scheduler.client.view.impl.BaseViewImpl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;


public class ExampleViewImpl extends BaseViewImpl<ExamplePresenter> implements ExampleView
{
	private static ExampleViewImplUiBinder uiBinder = GWT.create(ExampleViewImplUiBinder.class);
	
	interface ExampleViewImplUiBinder extends UiBinder<Widget, ExampleViewImpl>{}
	
	@UiField
	Grid mainPanel;
	
	@UiField
	Label userIdLabel;
	
	@UiField
	Label userIdField;
	
	@UiField
	Label userNameLabel;
	
	@UiField
	Label userNameField;

	@UiField
	Label firstNameLabel;
	
	@UiField
	Label firstNameField;
	
	@UiField
	Label lastNameLabel;
	
	@UiField
	Label lastNameField;
	
	@UiField
	Label emailLabel;
	
	@UiField
	Label emailField;
	
	@UiField
	Label userStateIdLabel;
	
	@UiField
	Label userStateIdField;

	@UiField
	Label createdAtLabel;
	
	@UiField
	Label createdAtField;
	
	@UiField
	Label updatedAtLabel;
	
	@UiField
	Label updatedAtField;
	
	public ExampleViewImpl()
	{
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	public Grid getMainPanel()
	{
		return mainPanel;
	}

	public Label getUserIdLabel()
	{
		return userIdLabel;
	}

	public Label getUserIdField()
	{
		return userIdField;
	}

	public Label getUserNameLabel()
	{
		return userNameLabel;
	}

	public Label getUserNameField()
	{
		return userNameField;
	}

	public Label getFirstNameLabel()
	{
		return firstNameLabel;
	}

	public Label getFirstNameField()
	{
		return firstNameField;
	}

	public Label getLastNameLabel()
	{
		return lastNameLabel;
	}

	public Label getLastNameField()
	{
		return lastNameField;
	}

	public Label getEmailLabel()
	{
		return emailLabel;
	}

	public Label getEmailField()
	{
		return emailField;
	}

	public Label getUserStateIdLabel()
	{
		return userStateIdLabel;
	}

	public Label getUserStateIdField()
	{
		return userStateIdField;
	}

	public Label getCreatedAtLabel()
	{
		return createdAtLabel;
	}

	public Label getCreatedAtField()
	{
		return createdAtField;
	}

	public Label getUpdatedAtLabel()
	{
		return updatedAtLabel;
	}

	public Label getUpdatedAtField()
	{
		return updatedAtField;
	}

	@Override
	public void setPresenter(ExamplePresenter presenter)
	{
		this.presenter = presenter;
	}
	

	@Override
	public Widget getWidgetContainer()
	{
		return this;
	}
	
	@Override
	public HasWidgets getViewRootPanel()
	{
		return mainPanel;
	}
	


}