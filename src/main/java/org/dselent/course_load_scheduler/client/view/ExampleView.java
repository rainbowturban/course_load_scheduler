package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.ExamplePresenter;

import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.Label;

public interface ExampleView extends BaseView<ExamplePresenter>
{
	public Grid getMainPanel();

	public Label getUserIdLabel();

	public Label getUserIdField();

	public Label getUserNameLabel();

	public Label getUserNameField();

	public Label getFirstNameLabel();

	public Label getFirstNameField();

	public Label getLastNameLabel();

	public Label getLastNameField();

	public Label getEmailLabel();

	public Label getEmailField();

	public Label getUserStateIdLabel();

	public Label getUserStateIdField();

	public Label getCreatedAtLabel();

	public Label getCreatedAtField();
	
	public Label getUpdatedAtLabel();

	public Label getUpdatedAtField();
}