package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.presenter.AddCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.impl.AddCoursePresenterImpl;
import org.dselent.course_load_scheduler.client.view.AddCourseView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class AddCourseViewImpl extends BaseViewImpl<AddCoursePresenter> implements AddCourseView {

	private static AddCourseViewImplUiBinder uiBinder = GWT.create(AddCourseViewImplUiBinder.class);
	@UiField HTMLPanel baseContainer;
	@UiField Button createButton;
	@UiField Button cancelButton;
	@UiField TextBox courseNameField;
	@UiField TextBox courseNumberField;
	@UiField ListBox frequencyDropdown;

	interface AddCourseViewImplUiBinder extends UiBinder<Widget, AddCourseViewImpl> {
	}

	public AddCourseViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	
	@Override
	public void setPresenter(AddCoursePresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		// TODO Auto-generated method stub
		return baseContainer;
	}
	
	
	

	
	
	
	
	
	
	
	@UiHandler("createButton")
	void onCreateButtonClick(ClickEvent event) {
		//TODO: check for valid name? Or would that be on the DB side?
		Courses newCourse = new Courses();
		newCourse.setFrequencyID(frequencyDropdown.getSelectedIndex());//TODO: This does not necessarily align with DB index!!
		newCourse.setTitle(courseNameField.getText());
		newCourse.setNumber(courseNumberField.getText());
		
		boolean success = presenter.submitNewCourse(newCourse);
		
		if(!success) {
			Window.alert("Course addition failed.");
		}
		else {
			presenter.returnToViewCourses();
		}
	}
	
	@UiHandler("cancelButton")
	void onCancelButtonClick(ClickEvent event) {
		presenter.returnToViewCourses();
	}
}
