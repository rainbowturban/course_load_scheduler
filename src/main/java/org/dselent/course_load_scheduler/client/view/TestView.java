package org.dselent.course_load_scheduler.client.view;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;

public class TestView extends Composite {

	private static TestViewUiBinder uiBinder = GWT.create(TestViewUiBinder.class);
	@UiField Button button1;
	@UiField Button button2;
	@UiField Button button3;

	interface TestViewUiBinder extends UiBinder<Widget, TestView> {
	}

	public TestView() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
